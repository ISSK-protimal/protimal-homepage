"use client";
// import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { sendContactEmailAction } from "@/actions/email";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const formSchema = z.object({
  companyName: z.string().min(1, ": 필수 항목입니다."),
  contactName: z.string().min(1, ": 필수 항목입니다."),
  phone: z.string().min(1, ": 필수 항목입니다."),
  email: z.email(": 이메일 형식이 올바르지 않습니다."),
  content: z.string().min(1, ": 필수 항목입니다."),
  privacy: z
    .boolean()
    .refine((value) => value, "개인정보 수집에 동의해주세요."),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      companyName: "",
      contactName: "",
      phone: "",
      email: "",
      content: "",
      privacy: false,
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // FormData 생성 및 값 설정
      const formData = new FormData();
      formData.append("companyName", values.companyName);
      formData.append("contactName", values.contactName);
      formData.append("contactEmail", values.email);
      formData.append("contactPhone", values.phone);
      formData.append("inquiryContent", values.content);
      formData.append("attachmentUrl", ""); // 파일 첨부는 일단 무시

      // 서버 액션 호출
      const result = await sendContactEmailAction(formData);
      console.log("이메일 전송 결과:", result);
      if (result?.error) {
        toast({
          mode: "error",
          description: `알 수 없는 오류가 발생했습니다.<br/>잠시 뒤에 다시 시도해주세요.`,
          button: {
            label: "확인",
          },
        });
      } else {
        toast({
          mode: "success",
          description: `문의가 접수되었습니다.<br/>빠른 시일 내에 회신해 드리겠습니다.`,
          button: {
            label: "확인",
            onClick: () => {
              form.reset();
            },
          },
        });
        form.reset(); // 폼 초기화
      }
    } catch (error) {
      console.error("Form submission error", error);
      toast({
        mode: "error",
        description: `알 수 없는 오류가 발생했습니다.<br/>잠시 뒤에 다시 시도해주세요.`,
        button: {
          label: "확인",
        },
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto space-y-8 py-10"
      >
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="h-4.5">
                기업명* <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="기업명을 입력해주세요"
                  type="text"
                  {...field}
                  className="bg-background"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="h-4.5">
                담당자 성함* <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="담당자 성함을 입력해주세요"
                  type="text"
                  {...field}
                  className="bg-background"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex w-full flex-col gap-8 md:flex-row">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="h-4.5">
                  담당자 연락처* <FormMessage />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="연락처를 입력해주세요"
                    type="text"
                    {...field}
                    className="bg-background"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="h-4.5">
                  담당자 이메일* <FormMessage />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="이메일을 입력해주세요"
                    type="email"
                    {...field}
                    className="bg-background"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="h-4.5">
                문의 내용* <FormMessage />
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="문의 내용을 입력해주세요"
                  {...field}
                  className="bg-background h-40"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormLabel className="data-[error=true]:text-foreground block">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="font-semibold underline">
                        개인정보 수집
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="text-foreground max-w-sm bg-neutral-100 py-2 text-sm text-wrap [&_svg]:bg-neutral-100 [&_svg]:fill-neutral-100">
                      <p>
                        <b>수집 목적:</b> <br />
                        문의 답변을 위한 의사소통 경로 확보 및 본인식별 <br />
                        <br />
                        <b>수집 항목:</b> <br />
                        기업명, 이메일주소, 전화번호 그외
                        <br />
                        <br />
                        <b>보유 및 이용기간:</b> <br />
                        입력일로부터 1년까지
                      </p>
                    </TooltipContent>
                  </Tooltip>
                  에 동의합니다.
                </FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="cursor-pointer"
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          className="w-full cursor-pointer font-semibold lg:w-max"
        >
          작성하기
        </Button>
      </form>
    </Form>
  );
}

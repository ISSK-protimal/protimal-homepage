"use client";
// import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CloudUpload, Paperclip } from "lucide-react";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload";

const formSchema = z.object({
  companyName: z.string().min(1, "필수 항목입니다."),
  phone: z.string().min(1, "필수 항목입니다."),
  email: z.email("이메일 형식이 올바르지 않습니다."),
  content: z.string().min(1, "필수 항목입니다."),
  files: z
    .array(z.instanceof(File))
    .refine((files) => {
      return files.every((file) => file.size <= 1024 * 1024 * 50);
    }, "50MB 이하의 파일만 첨부 가능합니다.")
    .nullable(),
});

export default function ContactForm() {
  const dropZoneConfig = {
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
      "application/pdf": [".pdf"],
    },
    maxFiles: 1,
    // maxSize: 1024 * 1024 * 50,
    multiple: false,
  };
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      companyName: "",
      phone: "",
      email: "",
      content: "",
      files: null,
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mx-auto py-10"
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
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-8 md:flex-row w-full">
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
                  className="h-40"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="files"
          render={({ field }) => (
            <FormItem>
              <FormLabel>파일 첨부(선택)</FormLabel>
              <FormDescription>
                50MB 이하의 PDF, JPG, PNG 파일만 첨부 가능합니다.
              </FormDescription>
              <FormControl>
                <FileUploader
                  value={field.value}
                  onValueChange={field.onChange}
                  dropzoneOptions={dropZoneConfig}
                  reSelect={true}
                  className="relative bg-background rounded-lg overflow-hidden"
                >
                  <FileInput
                    id="fileInput"
                    className="border border-dashed border-neutral-300"
                  >
                    <div className="flex items-center justify-center flex-col p-8 w-full ">
                      <CloudUpload className="text-gray-500 w-10 h-10 mb-2" />
                      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400 text-center">
                        <span className="font-semibold underline">
                          파일 선택
                        </span>
                        <br /> 또는 여기로 파일을 끌어다 놓으세요.
                      </p>
                      {/* <p className="text-xs text-gray-500 dark:text-gray-400">
                        PDF, JPG, JPEG, PNG
                      </p> */}
                    </div>
                  </FileInput>
                  <FileUploaderContent>
                    {field.value &&
                      field.value.length > 0 &&
                      !form.formState.errors[field.name] &&
                      field.value.map((file, i) => (
                        <FileUploaderItem key={i} index={i}>
                          <Paperclip className="h-4 w-4 stroke-current" />
                          <span>{file.name}</span>
                        </FileUploaderItem>
                      ))}
                  </FileUploaderContent>
                </FileUploader>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          className="w-full font-semibold cursor-pointer lg:w-max"
        >
          작성하기
        </Button>
      </form>
    </Form>
  );
}

"use server";

import { Resend } from "resend";
import ContactEmailTemplate from "@/components/emails/contact-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmailAction = async (formData: FormData) => {
  // FormData에서 값을 추출하고 string으로 변환
  const companyNameRaw = formData.get("companyName");
  const contactNameRaw = formData.get("contactName");
  const contactEmailRaw = formData.get("contactEmail");
  const contactPhoneRaw = formData.get("contactPhone");
  const inquiryContentRaw = formData.get("inquiryContent");

  // 타입 검증 및 string 변환
  if (
    !companyNameRaw ||
    typeof companyNameRaw !== "string" ||
    !contactNameRaw ||
    typeof contactNameRaw !== "string" ||
    !contactEmailRaw ||
    typeof contactEmailRaw !== "string" ||
    !contactPhoneRaw ||
    typeof contactPhoneRaw !== "string" ||
    !inquiryContentRaw ||
    typeof inquiryContentRaw !== "string"
  ) {
    return {
      error: "모든 필수 필드를 입력해주세요.",
    };
  }

  const companyName = companyNameRaw;
  const contactName = contactNameRaw;
  const contactEmail = contactEmailRaw;
  const contactPhone = contactPhoneRaw;
  const inquiryContent = inquiryContentRaw;
  try {
    const { data, error } = await resend.emails.send({
      from: "protimal-contact-forwarder@resend.dev",
      to: "isskprotimal@gmail.com",
      subject: "Protimal:새로운 문의가 도착했어요!",
      react: ContactEmailTemplate({
        companyName,
        contactName,
        contactEmail,
        contactPhone,
        inquiryContent,
      }),
    });

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }
    console.log("이메일 전송 완료, 전송아이디:", data.id);
  } catch (error) {
    console.error(error);
    return {
      error:
        "알 수 없는 오류로 제출에 실패했습니다. 잠시 뒤에 다시 시도해주세요.",
    };
  }

  return { success: true };
};

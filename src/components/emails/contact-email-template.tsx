import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Hr,
  Tailwind,
  Img,
} from "@react-email/components";

interface ContactEmailTemplateProps {
  companyName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  inquiryContent: string;
  attachmentUrl?: string;
}

const ContactEmailTemplate = (props: ContactEmailTemplateProps) => {
  const {
    companyName,
    contactName,
    contactEmail,
    contactPhone,
    inquiryContent,
    attachmentUrl,
  } = props;

  return (
    <Html lang="ko" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Protimal: 새로운 문의가 도착했습니다 - {companyName}</Preview>
        <Body className="bg-gray-100 py-[40px] font-sans">
          <Container className="mx-auto max-w-[600px] rounded-[8px] bg-orange-100 px-[16px] py-[40px] md:px-[40px]">
            {/* Logo */}
            <Section className="mb-[24px]">
              <Img
                src="https://protimal-homepage-one.vercel.app/images/logo.png"
                alt="Protimal Logo"
                className="h-auto w-full max-w-[100px] object-cover"
              />
            </Section>

            {/* Header */}
            <Section className="mb-[32px]">
              <Heading className="m-0 mb-[8px] text-[24px] font-bold text-gray-900">
                Protimal: 문의가 도착했습니다.
              </Heading>
              <Text className="m-0 text-[16px] text-gray-600">
                웹사이트 연락처 양식을 통해 새로운 문의가 접수되었습니다.
              </Text>
            </Section>

            <Hr className="my-[24px] border-white !border-t-white" />

            {/* Contact Information */}
            <Section className="mb-[32px]">
              <Heading className="m-0 mb-[16px] text-[18px] font-semibold text-gray-900">
                문의자 정보
              </Heading>

              {/* Company Name */}
              <Section className="mb-[16px] rounded-[6px] bg-gray-50 p-[16px]">
                <Text className="m-0 mb-[4px] text-[14px] font-medium text-gray-700">
                  기업명
                </Text>
                <Text className="m-0 text-[16px] text-gray-900">
                  {companyName}
                </Text>
              </Section>
              <Hr className="my-[24px] border-white !border-t-white" />

              {/* Contact Name */}
              <Section className="mb-[16px] rounded-[6px] bg-gray-50 p-[16px]">
                <Text className="m-0 mb-[4px] text-[14px] font-medium text-gray-700">
                  담당자 성함
                </Text>
                <Text className="m-0 text-[16px] text-gray-900">
                  {contactName}
                </Text>
              </Section>

              {/* Contact Email */}
              <Section className="mb-[16px] rounded-[6px] bg-gray-50 p-[16px]">
                <Text className="m-0 mb-[4px] text-[14px] font-medium text-gray-700">
                  담당자 이메일
                </Text>
                <Link
                  href={`mailto:${contactEmail}`}
                  className="text-[16px] text-orange-600 no-underline hover:underline"
                >
                  {contactEmail}
                </Link>
              </Section>

              {/* Contact Phone */}
              <Section className="mb-[16px] rounded-[6px] bg-gray-50 p-[16px]">
                <Text className="m-0 mb-[4px] text-[14px] font-medium text-gray-700">
                  담당자 연락처
                </Text>
                <Text className="m-0 text-[16px] text-gray-900">
                  {contactPhone}
                </Text>
              </Section>
            </Section>
            <Hr className="my-[24px] border-white !border-t-white" />

            {/* Inquiry Content */}
            <Section className="mb-[32px]">
              <Heading className="m-0 mb-[16px] text-[18px] font-semibold text-gray-900">
                문의 내용
              </Heading>
              <Section className="min-h-[120px] rounded-[6px] bg-gray-50 p-[20px]">
                <Text className="m-0 text-[16px] leading-[24px] whitespace-pre-wrap text-gray-900">
                  {inquiryContent}
                </Text>
              </Section>
            </Section>
            <Hr className="my-[24px] border-white !border-t-white" />

            {/* Attachment */}
            <Section className="mb-[32px]">
              <Heading className="m-0 mb-[16px] text-[18px] font-semibold text-gray-900">
                첨부파일
              </Heading>
              <Section className="rounded-[6px] border border-gray-200 bg-gray-50 p-[16px]">
                {attachmentUrl ? (
                  <>
                    <Text className="m-0 mb-[8px] text-[14px] font-medium text-gray-700">
                      첨부된 파일:
                    </Text>
                    <Link
                      href={attachmentUrl}
                      className="text-[16px] break-all text-orange-600 no-underline hover:underline"
                    >
                      {attachmentUrl}
                    </Link>
                  </>
                ) : (
                  <Text className="m-0 text-[16px] text-gray-500">
                    첨부파일이 없습니다.
                  </Text>
                )}
              </Section>
            </Section>

            <Hr className="my-[24px] border-white !border-t-white" />

            {/* Footer */}
            <Section>
              <Text className="m-0 mb-[8px] text-[14px] text-gray-600">
                이 이메일은 Protimal 홈페이지의 문의 섹션 폼 제출을 통해
                자동으로 발송되었습니다.
              </Text>
              <Text className="m-0 text-[12px] text-gray-500">
                © {new Date().getFullYear()} ISSK. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ContactEmailTemplate.PreviewProps = {
  companyName: "테크이노베이션 주식회사",
  contactName: "김철수",
  contactEmail: "kim.chulsoo@techinnovation.co.kr",
  contactPhone: "010-1234-5678",
  inquiryContent:
    "안녕하세요. 귀사의 제품에 대해 문의드리고 싶습니다.\n\n저희 회사는 현재 새로운 솔루션을 도입하려고 하는데, Protimal의 서비스가 저희 요구사항에 적합할지 궁금합니다.\n\n특히 다음과 같은 기능들이 필요합니다:\n- 실시간 데이터 분석\n- 사용자 친화적인 인터페이스\n- 모바일 호환성\n\n빠른 시일 내에 연락 주시면 감사하겠습니다.",
  attachmentUrl: "https://example.com/files/company-requirements.pdf",
};

export default ContactEmailTemplate;

import type { Locale } from "@/i18n/routing";

export type LegalSlug = "privacy" | "terms" | "cookies";

export type LegalSection = {
  id: string;
  heading: string;
  body?: string[];
  list?: string[];
  table?: { head: string[]; rows: string[][] };
  after?: string[];
};

export type LegalDoc = {
  title: string;
  summary: string;
  intro: string[];
  sections: LegalSection[];
};

export const LEGAL_SLUGS: LegalSlug[] = ["privacy", "terms", "cookies"];

export const LEGAL_UPDATED: Record<Locale, string> = {
  th: "27 กันยายน 2569",
  en: "27 September 2026",
};

const CONTACT_EMAIL = "cast.a.charm@gmail.com";
const CONTACT_LINE = "@castacharm";

const th: Record<LegalSlug, LegalDoc> = {
  privacy: {
    title: "นโยบายความเป็นส่วนตัว",
    summary: "เราเก็บข้อมูลส่วนบุคคลอะไร ใช้เพื่ออะไร และคุณมีสิทธิอย่างไรตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล",
    intro: [
      "Cast a Charm (“เรา”) ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ นโยบายนี้อธิบายวิธีที่เราเก็บรวบรวม ใช้ เปิดเผย และดูแลข้อมูลส่วนบุคคลเมื่อคุณเข้าชมเว็บไซต์ของเรา หรือติดต่อสอบถามและใช้บริการกับเรา ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)",
    ],
    sections: [
      {
        id: "data-we-collect",
        heading: "1. ข้อมูลที่เราเก็บรวบรวม",
        body: ["เว็บไซต์นี้ไม่มีแบบฟอร์มให้กรอกข้อมูล และไม่มีระบบสมาชิก เราจะได้รับข้อมูลส่วนบุคคลของคุณในกรณีต่อไปนี้"],
        list: [
          "ข้อมูลที่คุณให้เราโดยตรง เมื่อคุณติดต่อเราผ่านอีเมลหรือ LINE Official เช่น ชื่อ นามสกุล ชื่อบริษัท ตำแหน่ง อีเมล เบอร์โทรศัพท์ ชื่อบัญชี LINE และรายละเอียดธุรกิจหรือความต้องการที่คุณแจ้งให้เราทราบ",
          "ข้อมูลที่เกิดขึ้นระหว่างการให้บริการ เช่น บรีฟงาน ใบเสนอราคา สัญญา และข้อมูลการติดต่อประสานงาน",
          "ข้อมูลทางเทคนิค เช่น หมายเลข IP ประเภทเบราว์เซอร์และอุปกรณ์ หน้าที่เข้าชม และเวลาที่เข้าชม ซึ่งผู้ให้บริการโฮสติ้งบันทึกไว้โดยอัตโนมัติเพื่อความปลอดภัยและการทำงานของเว็บไซต์",
          "การตั้งค่าที่คุณเลือกบนเว็บไซต์ เช่น ภาษาและโหมดสว่าง/มืด (ดูรายละเอียดใน นโยบายคุกกี้)",
        ],
      },
      {
        id: "purposes",
        heading: "2. วัตถุประสงค์และฐานทางกฎหมาย",
        list: [
          "ตอบคำถาม ให้คำปรึกษา และจัดทำใบเสนอราคาตามที่คุณร้องขอ — เพื่อดำเนินการตามคำขอของคุณก่อนเข้าทำสัญญา",
          "ให้บริการตามสัญญา ประสานงาน ส่งมอบงาน และออกเอกสารทางการเงิน — เพื่อการปฏิบัติตามสัญญา",
          "ดูแลความปลอดภัย ป้องกันการใช้งานที่ผิดปกติ และปรับปรุงเว็บไซต์ — เพื่อประโยชน์โดยชอบด้วยกฎหมายของเรา",
          "ส่งข่าวสาร โปรโมชัน หรือข้อเสนอบริการ — เฉพาะเมื่อได้รับความยินยอมจากคุณ และคุณสามารถถอนความยินยอมได้ทุกเมื่อ",
          "ปฏิบัติตามกฎหมาย เช่น กฎหมายบัญชีและภาษี หรือคำสั่งของหน่วยงานรัฐ — เพื่อการปฏิบัติหน้าที่ตามกฎหมาย",
        ],
      },
      {
        id: "sharing",
        heading: "3. การเปิดเผยข้อมูล",
        body: ["เราไม่ขายข้อมูลส่วนบุคคลของคุณ เราอาจเปิดเผยข้อมูลเท่าที่จำเป็นให้แก่บุคคลต่อไปนี้"],
        list: [
          "ผู้ให้บริการที่ช่วยในการดำเนินงานของเรา เช่น ผู้ให้บริการอีเมล LINE ผู้ให้บริการโฮสติ้งเว็บไซต์ และระบบจัดเก็บเอกสาร",
          "พันธมิตรที่เกี่ยวข้องกับงานของคุณ เช่น อินฟลูเอนเซอร์ โรงพิมพ์ หรือผู้ผลิต — เฉพาะเมื่อจำเป็นต่อการให้บริการที่คุณว่าจ้าง",
          "ที่ปรึกษาวิชาชีพ เช่น ผู้สอบบัญชีและที่ปรึกษากฎหมาย",
          "หน่วยงานรัฐหรือบุคคลที่มีอำนาจตามกฎหมาย เมื่อมีหน้าที่ต้องเปิดเผย",
        ],
      },
      {
        id: "transfer",
        heading: "4. การส่งข้อมูลไปต่างประเทศ",
        body: [
          "ผู้ให้บริการบางรายของเรา (เช่น Google และ LINE) อาจจัดเก็บหรือประมวลผลข้อมูลบนเซิร์ฟเวอร์นอกประเทศไทย เราจะเลือกใช้ผู้ให้บริการที่มีมาตรการคุ้มครองข้อมูลส่วนบุคคลที่เหมาะสมตามที่กฎหมายกำหนด",
        ],
      },
      {
        id: "retention",
        heading: "5. ระยะเวลาการเก็บรักษา",
        list: [
          "ข้อมูลการติดต่อสอบถามที่ไม่ได้นำไปสู่การใช้บริการ: ไม่เกิน 2 ปีนับจากการติดต่อครั้งล่าสุด",
          "ข้อมูลลูกค้าและเอกสารที่เกี่ยวกับสัญญา: ตลอดระยะเวลาการให้บริการ และต่อไปอีกตามที่กฎหมายกำหนด (เช่น เอกสารบัญชีอย่างน้อย 5 ปี)",
          "ข้อมูลสำหรับการตลาด: จนกว่าคุณจะถอนความยินยอม",
        ],
        after: ["เมื่อพ้นระยะเวลาดังกล่าว เราจะลบ ทำลาย หรือทำให้ข้อมูลไม่สามารถระบุตัวตนได้"],
      },
      {
        id: "rights",
        heading: "6. สิทธิของเจ้าของข้อมูล",
        body: ["ภายใต้ PDPA คุณมีสิทธิดังต่อไปนี้"],
        list: [
          "สิทธิขอเข้าถึงและขอรับสำเนาข้อมูลส่วนบุคคลของคุณ",
          "สิทธิขอให้แก้ไขข้อมูลให้ถูกต้อง เป็นปัจจุบัน และสมบูรณ์",
          "สิทธิขอให้ลบ ทำลาย หรือทำให้ข้อมูลไม่สามารถระบุตัวตนได้",
          "สิทธิขอให้ระงับการใช้ข้อมูล",
          "สิทธิคัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูล",
          "สิทธิขอรับหรือขอให้โอนย้ายข้อมูล",
          "สิทธิถอนความยินยอมเมื่อใดก็ได้ โดยไม่กระทบต่อการประมวลผลที่ทำไปก่อนหน้า",
          "สิทธิร้องเรียนต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.)",
        ],
        after: [`คุณสามารถใช้สิทธิได้โดยติดต่อเราที่ ${CONTACT_EMAIL} เราจะพิจารณาและแจ้งผลภายใน 30 วันนับจากวันที่ได้รับคำขอ`],
      },
      {
        id: "security",
        heading: "7. ความปลอดภัยของข้อมูล",
        body: [
          "เราใช้มาตรการรักษาความปลอดภัยทั้งด้านการบริหารจัดการและด้านเทคนิคที่เหมาะสม เช่น การจำกัดสิทธิ์การเข้าถึงข้อมูลเฉพาะผู้ที่เกี่ยวข้อง และการใช้บริการที่มีการเข้ารหัสข้อมูล เพื่อป้องกันการสูญหาย การเข้าถึง การใช้ หรือการเปิดเผยโดยไม่ได้รับอนุญาต",
        ],
      },
      {
        id: "minors",
        heading: "8. ผู้เยาว์",
        body: [
          "บริการของเรามุ่งให้บริการแก่ธุรกิจและบุคคลที่บรรลุนิติภาวะ เราไม่มีเจตนาเก็บข้อมูลของผู้เยาว์ หากคุณเชื่อว่าผู้เยาว์ได้ให้ข้อมูลแก่เราโดยไม่ได้รับความยินยอมจากผู้ใช้อำนาจปกครอง โปรดติดต่อเราเพื่อดำเนินการลบข้อมูล",
        ],
      },
      {
        id: "changes",
        heading: "9. การเปลี่ยนแปลงนโยบาย",
        body: [
          "เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว โดยจะแสดงวันที่ปรับปรุงล่าสุดไว้ที่ด้านบนของหน้านี้ หากมีการเปลี่ยนแปลงที่สำคัญ เราจะแจ้งให้ทราบผ่านเว็บไซต์",
        ],
      },
      {
        id: "contact",
        heading: "10. ติดต่อเรา",
        body: [
          "หากมีคำถามเกี่ยวกับนโยบายนี้หรือต้องการใช้สิทธิของคุณ ติดต่อ Cast a Charm ได้ที่",
          `อีเมล: ${CONTACT_EMAIL}`,
          `LINE Official: ${CONTACT_LINE}`,
        ],
      },
    ],
  },

  terms: {
    title: "ข้อกำหนดการใช้งาน",
    summary: "เงื่อนไขในการใช้เว็บไซต์ Cast a Charm สิทธิในเนื้อหา และข้อจำกัดความรับผิด",
    intro: [
      "ข้อกำหนดนี้ใช้กับการเข้าชมและใช้งานเว็บไซต์ของ Cast a Charm (“เรา”) การใช้งานเว็บไซต์ถือว่าคุณยอมรับข้อกำหนดนี้ หากไม่ยอมรับ โปรดหยุดใช้งานเว็บไซต์",
    ],
    sections: [
      {
        id: "about",
        heading: "1. เกี่ยวกับเว็บไซต์",
        body: [
          "เว็บไซต์นี้จัดทำขึ้นเพื่อแนะนำบริการด้านการตลาดของเรา และเป็นช่องทางให้คุณติดต่อสอบถาม ข้อมูลบนเว็บไซต์เป็นข้อมูลทั่วไป ไม่ถือเป็นคำเสนอหรือสัญญาให้บริการ",
        ],
      },
      {
        id: "services",
        heading: "2. การว่าจ้างบริการ",
        body: [
          "ขอบเขตงาน ค่าบริการ ระยะเวลา และเงื่อนไขการให้บริการจริงจะเป็นไปตามใบเสนอราคาหรือสัญญาที่ทั้งสองฝ่ายตกลงกันเป็นลายลักษณ์อักษร หากข้อกำหนดนี้ขัดแย้งกับสัญญาดังกล่าว ให้ถือตามสัญญาเป็นหลัก",
        ],
      },
      {
        id: "results",
        heading: "3. ตัวเลขและผลลัพธ์ที่แสดง",
        body: [
          "ตัวเลข สถิติ กราฟ และตัวอย่างผลลัพธ์บนเว็บไซต์มีไว้เพื่อประกอบการอธิบายเท่านั้น ผลลัพธ์ทางการตลาดขึ้นอยู่กับหลายปัจจัย เช่น สินค้า ตลาด งบประมาณ และช่วงเวลา เราจึงไม่รับประกันว่าคุณจะได้ผลลัพธ์เดียวกัน",
        ],
      },
      {
        id: "ip",
        heading: "4. ทรัพย์สินทางปัญญา",
        body: [
          "ข้อความ โลโก้ ภาพประกอบ การออกแบบ และเนื้อหาทั้งหมดบนเว็บไซต์เป็นทรัพย์สินของ Cast a Charm หรือผู้อนุญาตให้ใช้สิทธิ ห้ามทำซ้ำ ดัดแปลง เผยแพร่ หรือใช้เพื่อการค้าโดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรจากเรา",
          "ชื่อและเครื่องหมายของแพลตฟอร์มอื่นที่กล่าวถึง (เช่น Meta, TikTok, Google, LINE) เป็นของเจ้าของแต่ละราย",
        ],
      },
      {
        id: "acceptable-use",
        heading: "5. การใช้งานที่ไม่อนุญาต",
        list: [
          "ใช้เว็บไซต์ในทางที่ผิดกฎหมายหรือละเมิดสิทธิของผู้อื่น",
          "พยายามเข้าถึงระบบโดยไม่ได้รับอนุญาต หรือรบกวนการทำงานของเว็บไซต์",
          "ดึงข้อมูลจากเว็บไซต์เป็นจำนวนมากด้วยระบบอัตโนมัติ",
          "แอบอ้างเป็น Cast a Charm หรือทีมงานของเรา",
        ],
      },
      {
        id: "links",
        heading: "6. ลิงก์ไปยังเว็บไซต์ภายนอก",
        body: [
          "เว็บไซต์อาจมีลิงก์ไปยังเว็บไซต์หรือแพลตฟอร์มของบุคคลอื่น เช่น Facebook, Instagram, TikTok และ LinkedIn เราไม่ได้ควบคุมและไม่รับผิดชอบต่อเนื้อหาหรือนโยบายความเป็นส่วนตัวของเว็บไซต์เหล่านั้น",
        ],
      },
      {
        id: "disclaimer",
        heading: "7. การปฏิเสธความรับผิด",
        body: [
          "เราพยายามดูแลให้ข้อมูลบนเว็บไซต์ถูกต้องและเป็นปัจจุบัน แต่ไม่รับประกันความครบถ้วน ความถูกต้อง หรือการใช้งานได้อย่างต่อเนื่องโดยไม่มีข้อผิดพลาด ภายในขอบเขตที่กฎหมายอนุญาต เราไม่รับผิดชอบต่อความเสียหายใด ๆ ที่เกิดจากการใช้หรือไม่สามารถใช้เว็บไซต์",
        ],
      },
      {
        id: "law",
        heading: "8. กฎหมายที่ใช้บังคับ",
        body: ["ข้อกำหนดนี้อยู่ภายใต้กฎหมายไทย ข้อพิพาทใด ๆ ให้อยู่ในเขตอำนาจของศาลไทย"],
      },
      {
        id: "changes",
        heading: "9. การเปลี่ยนแปลงข้อกำหนด",
        body: [
          "เราอาจแก้ไขข้อกำหนดนี้ได้ตามความเหมาะสม โดยจะมีผลเมื่อเผยแพร่บนหน้านี้ การใช้งานเว็บไซต์ต่อหลังจากนั้นถือว่าคุณยอมรับข้อกำหนดที่แก้ไขแล้ว",
        ],
      },
      {
        id: "contact",
        heading: "10. ติดต่อเรา",
        body: [`อีเมล: ${CONTACT_EMAIL}`, `LINE Official: ${CONTACT_LINE}`],
      },
    ],
  },

  cookies: {
    title: "นโยบายคุกกี้",
    summary: "คุกกี้และการจัดเก็บข้อมูลบนเบราว์เซอร์ที่เว็บไซต์นี้ใช้ และวิธีจัดการ",
    intro: [
      "นโยบายนี้อธิบายว่าเว็บไซต์ของ Cast a Charm ใช้คุกกี้และเทคโนโลยีจัดเก็บข้อมูลบนเบราว์เซอร์อย่างไร และคุณจะจัดการการตั้งค่าได้อย่างไร",
    ],
    sections: [
      {
        id: "what",
        heading: "1. คุกกี้คืออะไร",
        body: [
          "คุกกี้คือไฟล์ข้อความขนาดเล็กที่เว็บไซต์บันทึกไว้ในเบราว์เซอร์ของคุณ เพื่อจดจำข้อมูลบางอย่าง เช่น ภาษาที่คุณเลือก นอกจากคุกกี้แล้ว เว็บไซต์อาจใช้พื้นที่จัดเก็บในเบราว์เซอร์ (Local Storage) ซึ่งทำงานในลักษณะคล้ายกัน",
        ],
      },
      {
        id: "we-use",
        heading: "2. คุกกี้ที่เราใช้",
        body: ["ปัจจุบันเว็บไซต์ใช้เฉพาะคุกกี้และการจัดเก็บข้อมูลที่จำเป็นต่อการทำงานและการจดจำการตั้งค่าของคุณเท่านั้น"],
        table: {
          head: ["ชื่อ", "ประเภท", "วัตถุประสงค์", "ระยะเวลา"],
          rows: [
            ["NEXT_LOCALE", "คุกกี้ที่จำเป็น", "จดจำภาษา (ไทย/อังกฤษ) ที่คุณเลือก", "จนกว่าจะปิดเบราว์เซอร์"],
            ["theme", "Local Storage (การตั้งค่า)", "จดจำโหมดสว่าง/มืดที่คุณเลือก", "จนกว่าคุณจะล้างข้อมูลเบราว์เซอร์"],
          ],
        },
        after: [
          "เราไม่ใช้คุกกี้เพื่อการวิเคราะห์ การโฆษณา หรือการติดตามพฤติกรรมข้ามเว็บไซต์ในขณะนี้ หากในอนาคตมีการใช้คุกกี้ประเภทดังกล่าว เราจะขอความยินยอมจากคุณก่อน และปรับปรุงนโยบายนี้",
        ],
      },
      {
        id: "third-party",
        heading: "3. บริการของบุคคลภายนอก",
        list: [
          "Google Fonts: เว็บไซต์โหลดแบบอักษรและไอคอนจาก Google ซึ่งทำให้ Google ได้รับหมายเลข IP ของคุณเพื่อส่งไฟล์ แต่ไม่มีการตั้งคุกกี้บนเว็บไซต์ของเรา",
          "ลิงก์โซเชียลมีเดีย (Facebook, Instagram, TikTok, LinkedIn) และ LINE: แพลตฟอร์มเหล่านั้นอาจตั้งคุกกี้ของตนเองเมื่อคุณคลิกลิงก์ไปยังเว็บไซต์ของเขา ซึ่งอยู่ภายใต้นโยบายของแต่ละแพลตฟอร์ม",
        ],
      },
      {
        id: "manage",
        heading: "4. การจัดการคุกกี้",
        body: [
          "คุณสามารถลบหรือปิดการใช้คุกกี้และ Local Storage ได้ผ่านการตั้งค่าของเบราว์เซอร์ (เช่น Chrome, Safari, Firefox, Edge) หากปิดการใช้งาน เว็บไซต์จะยังใช้งานได้ แต่อาจจำภาษาหรือโหมดที่คุณเลือกไว้ไม่ได้",
        ],
      },
      {
        id: "changes",
        heading: "5. การเปลี่ยนแปลงนโยบาย",
        body: ["เราอาจปรับปรุงนโยบายคุกกี้นี้เมื่อมีการเปลี่ยนแปลงการใช้งานคุกกี้บนเว็บไซต์ โดยจะแสดงวันที่ปรับปรุงล่าสุดไว้ที่ด้านบนของหน้านี้"],
      },
      {
        id: "contact",
        heading: "6. ติดต่อเรา",
        body: [`หากมีคำถามเกี่ยวกับนโยบายคุกกี้ ติดต่อเราได้ที่ ${CONTACT_EMAIL}`],
      },
    ],
  },
};

const en: Record<LegalSlug, LegalDoc> = {
  privacy: {
    title: "Privacy Policy",
    summary: "What personal data we collect, why we use it, and your rights under Thailand's PDPA.",
    intro: [
      "Cast a Charm (“we”, “us”) respects your privacy. This policy explains how we collect, use, disclose, and protect personal data when you visit our website, contact us, or use our services, in line with Thailand's Personal Data Protection Act B.E. 2562 (2019) (PDPA).",
    ],
    sections: [
      {
        id: "data-we-collect",
        heading: "1. Data we collect",
        body: ["This website has no sign-up and no data entry forms. We receive personal data in the following ways:"],
        list: [
          "Information you give us directly when you contact us by email or LINE Official — such as your name, company, job title, email address, phone number, LINE account name, and details about your business or needs.",
          "Information created while we work together — such as briefs, quotes, contracts, and project correspondence.",
          "Technical data — such as IP address, browser and device type, pages visited, and time of visit — logged automatically by our hosting provider for security and to keep the site running.",
          "Preferences you choose on the site, such as language and light/dark mode (see our Cookie Policy).",
        ],
      },
      {
        id: "purposes",
        heading: "2. Purposes and legal bases",
        list: [
          "To answer your questions, give consultations, and prepare quotes you ask for — to take steps at your request before entering into a contract.",
          "To deliver contracted services, coordinate work, and issue financial documents — to perform our contract with you.",
          "To keep the website secure, prevent misuse, and improve it — for our legitimate interests.",
          "To send news, offers, or service updates — only with your consent, which you can withdraw at any time.",
          "To comply with the law, such as accounting and tax rules or orders from authorities — to meet our legal obligations.",
        ],
      },
      {
        id: "sharing",
        heading: "3. Who we share data with",
        body: ["We do not sell your personal data. We share it only as needed with:"],
        list: [
          "Service providers that help us operate, such as our email provider, LINE, website hosting, and document storage.",
          "Partners involved in your project, such as influencers, printers, or manufacturers — only when needed to deliver the services you hired us for.",
          "Professional advisers, such as auditors and lawyers.",
          "Government agencies or others with legal authority, when we are required to disclose.",
        ],
      },
      {
        id: "transfer",
        heading: "4. International transfers",
        body: [
          "Some of our providers (such as Google and LINE) may store or process data on servers outside Thailand. We use providers with appropriate data protection safeguards as required by law.",
        ],
      },
      {
        id: "retention",
        heading: "5. How long we keep data",
        list: [
          "Inquiries that do not lead to a project: up to 2 years from our last contact.",
          "Client data and contract documents: for the duration of our services and afterwards for as long as the law requires (for example, at least 5 years for accounting records).",
          "Marketing data: until you withdraw your consent.",
        ],
        after: ["After that, we delete, destroy, or anonymize the data."],
      },
      {
        id: "rights",
        heading: "6. Your rights",
        body: ["Under the PDPA you have the right to:"],
        list: [
          "Access and obtain a copy of your personal data.",
          "Have your data corrected so it is accurate, current, and complete.",
          "Have your data deleted, destroyed, or anonymized.",
          "Restrict the use of your data.",
          "Object to the collection, use, or disclosure of your data.",
          "Receive your data or have it transferred to another controller.",
          "Withdraw consent at any time, without affecting processing done before withdrawal.",
          "Lodge a complaint with Thailand's Personal Data Protection Committee (PDPC).",
        ],
        after: [`To exercise these rights, contact us at ${CONTACT_EMAIL}. We will respond within 30 days of receiving your request.`],
      },
      {
        id: "security",
        heading: "7. Security",
        body: [
          "We use appropriate organizational and technical measures — such as limiting access to people who need it and using services that encrypt data — to protect your data against loss and unauthorized access, use, or disclosure.",
        ],
      },
      {
        id: "minors",
        heading: "8. Minors",
        body: [
          "Our services are intended for businesses and adults. We do not knowingly collect data from minors. If you believe a minor has given us data without parental consent, please contact us and we will delete it.",
        ],
      },
      {
        id: "changes",
        heading: "9. Changes to this policy",
        body: [
          "We may update this policy from time to time. The latest update date is shown at the top of this page. If we make significant changes, we will let you know on the website.",
        ],
      },
      {
        id: "contact",
        heading: "10. Contact us",
        body: [
          "For questions about this policy or to exercise your rights, contact Cast a Charm:",
          `Email: ${CONTACT_EMAIL}`,
          `LINE Official: ${CONTACT_LINE}`,
        ],
      },
    ],
  },

  terms: {
    title: "Terms of Service",
    summary: "The rules for using the Cast a Charm website, content ownership, and limits of liability.",
    intro: [
      "These terms apply to your use of the Cast a Charm (“we”, “us”) website. By using the website you agree to these terms. If you do not agree, please stop using the website.",
    ],
    sections: [
      {
        id: "about",
        heading: "1. About this website",
        body: [
          "This website introduces our marketing services and gives you a way to contact us. Information on the site is general and is not an offer or a contract for services.",
        ],
      },
      {
        id: "services",
        heading: "2. Hiring our services",
        body: [
          "The actual scope, fees, timeline, and terms of any service are set out in a written quote or contract agreed by both parties. If these terms conflict with that contract, the contract prevails.",
        ],
      },
      {
        id: "results",
        heading: "3. Figures and results shown",
        body: [
          "Figures, statistics, charts, and example results on this website are for illustration only. Marketing results depend on many factors — such as the product, market, budget, and timing — so we do not guarantee you will achieve the same results.",
        ],
      },
      {
        id: "ip",
        heading: "4. Intellectual property",
        body: [
          "All text, logos, illustrations, designs, and other content on this website belong to Cast a Charm or its licensors. You may not copy, modify, publish, or use them commercially without our written permission.",
          "Names and marks of other platforms mentioned (such as Meta, TikTok, Google, and LINE) belong to their respective owners.",
        ],
      },
      {
        id: "acceptable-use",
        heading: "5. Prohibited use",
        list: [
          "Using the website unlawfully or in a way that infringes others' rights.",
          "Attempting unauthorized access to our systems or disrupting the website.",
          "Scraping content from the website at scale with automated tools.",
          "Impersonating Cast a Charm or our team.",
        ],
      },
      {
        id: "links",
        heading: "6. Third-party links",
        body: [
          "The website may link to third-party sites and platforms such as Facebook, Instagram, TikTok, and LinkedIn. We do not control and are not responsible for their content or privacy practices.",
        ],
      },
      {
        id: "disclaimer",
        heading: "7. Disclaimer",
        body: [
          "We try to keep the information on this website accurate and up to date, but we do not guarantee that it is complete, accurate, or available without interruption or errors. To the extent permitted by law, we are not liable for any loss arising from your use of, or inability to use, the website.",
        ],
      },
      {
        id: "law",
        heading: "8. Governing law",
        body: ["These terms are governed by the laws of Thailand, and any dispute is subject to the jurisdiction of the Thai courts."],
      },
      {
        id: "changes",
        heading: "9. Changes to these terms",
        body: [
          "We may update these terms as needed. Changes take effect when published on this page, and continuing to use the website means you accept the updated terms.",
        ],
      },
      {
        id: "contact",
        heading: "10. Contact us",
        body: [`Email: ${CONTACT_EMAIL}`, `LINE Official: ${CONTACT_LINE}`],
      },
    ],
  },

  cookies: {
    title: "Cookie Policy",
    summary: "The cookies and browser storage this website uses, and how to manage them.",
    intro: [
      "This policy explains how the Cast a Charm website uses cookies and similar browser storage, and how you can control them.",
    ],
    sections: [
      {
        id: "what",
        heading: "1. What cookies are",
        body: [
          "Cookies are small text files a website saves in your browser to remember things, such as the language you chose. Websites can also use your browser's Local Storage, which works in a similar way.",
        ],
      },
      {
        id: "we-use",
        heading: "2. Cookies we use",
        body: ["Right now the website only uses cookies and storage that are needed for it to work and to remember your settings."],
        table: {
          head: ["Name", "Type", "Purpose", "Duration"],
          rows: [
            ["NEXT_LOCALE", "Strictly necessary cookie", "Remembers the language (Thai/English) you chose", "Until you close your browser"],
            ["theme", "Local Storage (preference)", "Remembers your light/dark mode choice", "Until you clear your browser data"],
          ],
        },
        after: [
          "We do not currently use analytics, advertising, or cross-site tracking cookies. If we add them in future, we will ask for your consent first and update this policy.",
        ],
      },
      {
        id: "third-party",
        heading: "3. Third-party services",
        list: [
          "Google Fonts: the website loads fonts and icons from Google, so Google receives your IP address to deliver the files. No cookies are set on our website for this.",
          "Social media links (Facebook, Instagram, TikTok, LinkedIn) and LINE: these platforms may set their own cookies when you follow a link to their sites, under their own policies.",
        ],
      },
      {
        id: "manage",
        heading: "4. Managing cookies",
        body: [
          "You can delete or block cookies and Local Storage in your browser settings (for example Chrome, Safari, Firefox, or Edge). The website will still work, but it may not remember your language or display mode.",
        ],
      },
      {
        id: "changes",
        heading: "5. Changes to this policy",
        body: ["We may update this Cookie Policy when our use of cookies changes. The latest update date is shown at the top of this page."],
      },
      {
        id: "contact",
        heading: "6. Contact us",
        body: [`For questions about this Cookie Policy, email us at ${CONTACT_EMAIL}.`],
      },
    ],
  },
};

export const LEGAL_CONTENT: Record<Locale, Record<LegalSlug, LegalDoc>> = { th, en };

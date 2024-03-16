import { BUSINESS_INFO } from '@constants/businessInfo';

export default function Footer() {
  return (
    <ul className="text-middle-blue-gray regular-14-2 bg-[#F7F9FA] px-[20px] py-[40px]">
      {BUSINESS_INFO.map((info) => (
        <li className="flex gap-[4px]" key={info.title}>
          <p>{`${info.title} :`}</p>
          <p>{info.value}</p>
        </li>
      ))}
    </ul>
  );
}

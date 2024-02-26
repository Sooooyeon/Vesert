import Link from 'next/link';

export default function Splash() {
  return (
    <div>
      <Link href={'/login'}>로그인</Link>
      <Link href={'/join'}>회원가입</Link>
    </div>
  );
}

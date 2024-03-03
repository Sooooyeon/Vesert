import Link from 'next/link';

export default function Splash() {
  return (
    <div>
      <Link href={'/login'}>로그인</Link>
      <Link href={'/signup'}>회원가입</Link>
    </div>
  );
}

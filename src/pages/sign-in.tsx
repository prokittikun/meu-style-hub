import { NextPage } from 'next'
import Icon from './components/common/Icon'
import Button from './components/common/Button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChevronLeftIcon } from 'lucide-react';


const SignIn: NextPage = () => {
    const { query } = useRouter();

  return (
    <div className="mx-auto h-screen w-full max-w-[73rem] flex-col gap-10 p-5 md:flex-row md:p-10">
      <div className="flex h-full w-full flex-col items-center justify-center gap-5">
        <button
          onClick={() =>
            signIn("google", { callbackUrl: query.callbackUrl == null ? "/" : query.callbackUrl as string })
          }
        >
          Sign with Google (@ku.th)
        </button>
        <Link href={"/"} className="text-lg text-red-400">
          <ChevronLeftIcon />
          กลับหน้าหลัก
        </Link>
      </div>
    </div>
  );
}

export default SignIn
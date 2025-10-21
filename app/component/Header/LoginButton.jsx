"use client";

const LoginButton = () => {
  return (
    <button className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-full">
      <img className="h-7" src="/google.png" alt="" />
      Login With Google
    </button>
  );
};

export default LoginButton;

import React from "react";

const Signup = () => {
  return (
    <div class="bg-[#050816] min-h-screen flex items-center justify-center p-4 relative overflow-x-hidden">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div class="relative w-full max-w-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-2xl my-8">
        <div class="text-center mb-6">
          <div class="inline-flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-md shadow-violet-500/10">
              <span class="text-white font-bold text-sm">&lt;/&gt;</span>
            </div>
            <span class="text-xl font-bold text-white tracking-tight">
              DevFlow <span class="text-violet-400">AI</span>
            </span>
          </div>

          <h2 class="text-2xl font-semibold text-white tracking-tight">
            Create your account
          </h2>
          <p class="mt-1.5 text-sm text-gray-400">
            Start building faster with AI-powered tools
          </p>
        </div>

        <form action="/signup" method="POST" class="space-y-4">
          <div>
            <label class="block text-xs font-medium text-gray-300 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              required
              class="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-gray-600 outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition duration-200"
            />
          </div>

          {/* <!-- Email --> */}
          <div>
            <label class="block text-xs font-medium text-gray-300 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              class="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-gray-600 outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition duration-200"
            />
          </div>

          <div class="block text-xs font-medium text-gray-300 mb-1.5">
            <div>
              <label class="block text-xs font-medium text-gray-300 mb-1.5">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                class="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-gray-600 outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition duration-200"
              />
            </div>
          </div>

          <button
            type="submit"
            class="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 text-white font-medium text-sm hover:opacity-95 transition duration-200 shadow-md shadow-violet-500/10"
          >
            Create Account
          </button>
        </form>

        <div class="flex items-center gap-3 my-5">
          <div class="flex-1 h-[1px] bg-white/[0.06]"></div>
          <span class="text-gray-600 text-[11px] font-medium tracking-wider uppercase">
            Or continue with
          </span>
          <div class="flex-1 h-[1px] bg-white/[0.06]"></div>
        </div>

        <p class="text-center text-xs text-gray-500 mt-6">
          Already have an account?
          <a
            href="/login"
            class="text-violet-400 hover:underline font-medium ml-1"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

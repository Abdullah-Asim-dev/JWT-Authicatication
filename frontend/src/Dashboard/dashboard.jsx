import React from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";

function Dashbaord() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 pb-8 pt-28 text-white sm:px-6 sm:pt-32">

      {/* Background — same as Login / Signup */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-9rem)] items-center justify-center">

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="w-full max-w-3xl"
        >

          {/* Logo + heading — same pattern as Login / Signup */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-8 text-center"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 shadow-lg shadow-emerald-500/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7 text-slate-950"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3l7 3v5c0 4.7-3 8-7 9.5C8 19 5 15.7 5 11V6l7-3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold tracking-tight">
              Welcome back 👋
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Your authentication dashboard is ready
            </p>
          </motion.div>

          {/* Card — same style as Login / Signup form card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-8"
          >

            {/* Status badge */}
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-400"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              You're securely logged in
            </motion.div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-3">

              {/* Card 1 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="rounded-xl border border-white/10 bg-slate-950/40 p-4 transition-colors duration-300 hover:border-emerald-400/20"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-slate-500">
                      Authentication
                    </p>

                    <h2 className="mt-2 text-xl font-bold">
                      Active
                    </h2>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3l7 3v5c0 4.7-3 8-7 9.5C8 19 5 15.7 5 11V6l7-3z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Secure session
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="rounded-xl border border-white/10 bg-slate-950/40 p-4 transition-colors duration-300 hover:border-cyan-400/20"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-slate-500">
                      Session
                    </p>

                    <h2 className="mt-2 text-xl font-bold">
                      JWT
                    </h2>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <circle cx="12" cy="12" r="8" />
                      <path
                        strokeLinecap="round"
                        d="M12 8v4l2.5 2"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-4 text-xs text-slate-500">
                  Token-based auth
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="rounded-xl border border-white/10 bg-slate-950/40 p-4 transition-colors duration-300 hover:border-violet-400/20"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-slate-500">
                      API Status
                    </p>

                    <h2 className="mt-2 text-xl font-bold">
                      Online
                    </h2>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-400/10 text-violet-400">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 12h4l2-7 4 14 2-7h4"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-4 text-xs text-slate-500">
                  Backend ready
                </div>
              </motion.div>

            </div>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-slate-600">
                QUICK ACTIONS
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Quick actions */}
            <motion.div variants={itemVariants} className="grid gap-3 sm:grid-cols-2">

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/dashboard"
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/40 p-4 transition-colors hover:border-emerald-400/20 hover:bg-emerald-400/[0.04]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                    →
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Dashboard
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                      View your overview
                    </p>
                  </div>
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/40 p-4 text-left transition-colors hover:border-red-400/20 hover:bg-red-400/[0.04]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-400/10 text-red-400">
                  ↗
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Sign out
                  </p>

                  <p className="mt-1 text-xs text-slate-600">
                    End current session
                  </p>
                </div>
              </motion.button>

            </motion.div>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-slate-600">
                SECURITY
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Security details */}
            <motion.div variants={itemVariants} className="space-y-4">

              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-sm text-slate-500">
                  JWT token
                </span>

                <span className="text-xs font-medium text-emerald-400">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-sm text-slate-500">
                  Session
                </span>

                <span className="text-xs font-medium text-emerald-400">
                  Protected
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Token
                </span>

                <span className="max-w-[160px] truncate text-xs text-slate-600">
                  {token || "No token"}
                </span>
              </div>

            </motion.div>
          </motion.div>

          {/* Footer — same pattern as Login / Signup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            AuthFlow Dashboard · System operational
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}

export default Dashbaord;
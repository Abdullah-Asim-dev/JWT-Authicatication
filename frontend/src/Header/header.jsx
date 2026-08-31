import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

function Header() {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/90 px-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
      >
        {/* Logo */}
        <Link
          to={token ? "/dashboard" : "/login"}
          className="flex shrink-0 items-center gap-2.5"
        >
          <motion.div
            whileHover={{ scale: 1.06, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-sm font-black text-slate-950 shadow-lg shadow-emerald-500/20"
          >
            A
          </motion.div>

          <span className="text-base font-bold tracking-tight text-white">
            Authora
          </span>
        </Link>

        {/* Navigation */}
        {!token ? (
          <div className="flex items-center gap-2">
            {/* Login */}
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/login"
                className={`flex h-10 items-center rounded-xl px-4 text-sm font-medium transition-all ${
                  location.pathname === "/login"
                    ? "border border-white/10 bg-white/[0.08] !text-white"
                    : "!text-slate-400 hover:bg-white/[0.05] hover:!text-white"
                }`}
              >
                Login
              </Link>
            </motion.div>

            {/* Create Account */}
            <motion.div
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/register"
                className="flex h-10 items-center rounded-xl bg-emerald-400 px-4 text-sm font-semibold !text-slate-950 shadow-lg shadow-emerald-500/10 transition hover:bg-emerald-300"
              >
                Create account
              </Link>
            </motion.div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {/* Dashboard */}
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/dashboard"
                className={`flex h-10 items-center rounded-xl px-4 text-sm font-medium transition-all ${
                  location.pathname === "/dashboard"
                    ? "border border-white/10 bg-white/[0.08] !text-white"
                    : "!text-slate-400 hover:bg-white/[0.05] hover:!text-white"
                }`}
              >
                Dashboard
              </Link>
            </motion.div>

            {/* Logout */}
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleLogout}
              className="flex h-10 items-center rounded-xl px-4 text-sm font-medium !text-slate-400 transition hover:bg-red-500/10 hover:!text-red-400"
            >
              Logout
            </motion.button>
          </div>
        )}
      </motion.nav>
    </header>
  );
}

export default Header;
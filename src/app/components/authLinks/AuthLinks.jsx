"use client";
import Link from "next/link";
import styles from "./authlinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();
  return (
    <>
          {status === "unauthenticated" ? (
            <Link href="/login" className={styles.link}>Login</Link>
          ) : (
            <>
              <Link href="/write" className={styles.link}>Write</Link>
              <span className={styles.link} onClick={signOut}>Logout</span>
            </>
          )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default AuthLinks;

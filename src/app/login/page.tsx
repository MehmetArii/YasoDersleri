'use client';

import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from '@/store/features/authSlice';
import { useRouter } from 'next/navigation';
import styles from './Login.module.scss';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const fakeToken = 'abcdefg';
    dispatch(login({ email, token: fakeToken }));
    router.push('/');
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.formBox} onSubmit={handleLogin}>
        <h2 className={styles.heading}>Giriş Yap</h2>
        <input className={styles.inputField} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input className={styles.inputField} type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button className={styles.button} type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginPage;

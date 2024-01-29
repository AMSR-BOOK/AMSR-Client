import React from 'react';
import styles from './SearchNoResult.module.scss';

export default function SearchNoResult() {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src="https://lh3.googleusercontent.com/fife/AGXqzDmXOole7t5G2gVJms-WRb6g8yeXbP7aJGoCTJ4Y_egq97gMQGXv3vdRGoPsDyZLwgKQs6duqFATGWOMSihbBqKoCRw-Iee9eNfT9EbSVVoX2I3swv_CVORsyhAmTwg7fD28-MMpC4baL312wB_ilb_o6HsMhoLjp8iYK6NHIaewJC6f-1rWuE9mUawWnniNRXJDnjL0sAk0uGfSPIppUqQ1OofAZiAulKPknOvlq8bC-JguAcLkQnymGOqIAZfAV0OPXprrOPs9XrZ_K8sSfQCHwaMMBeapqmJN44bDll5OR8cnUdLUK6F-Yt83O5msmfjir6Jy1eaUmFs_hVeVKBUf6Te7YEhKa_LvifXyd-FxFuw4j-IRzVZZMIO1mm27ntadED8AImiEZat8QYnRtnKcuazenPdKuU6wMmryOZ4CHR-xcoUWd33rz1h0pQP7lnJqLsUS2HcYpxkxWg84hQ4FTLQf45qXffEEmp3DMxUQgOAwSnkB5hOKp6ZijYshN8p1Im_wtnl6y1itIo8j63km3461-BIREWUpb1L05rTjw7WrlNLqCTZBlREUdq_o5If5g82z6BK2VdNrUqjU4kP0brhD8lOFFCP_1G4vhowtg8oUTpn3FVVlLZymtP5zUaR7ncDpNVQ9xI-Tjvryxw4PltugD9h_3h1aa3Z3r6UTC0s-7hJHJ--XJwiFN6nSpLcZHuTDtTJun8nrdITdUcj19DHuO-yDjEMxUG3LfaHfpbWtxSeGAB5vJSwRO7fbRukBjsJ6xavvdSrEaTqAU8E3-Msxd3gtrm9lGDIHp7ew6Zxun6d7cCM7yMHE84HjCBSMVBat2fws9YFv3SJew5ND4sJ8uvXpOytNUHSU0hXKcAip38nq7DccTyMD8DgLbuD97lGQAIgK1JNHxWUIQTq8riQZK_J-OXaLfPTHhkJRCwhDX0_QHCKFHFw3dY333XZIShSwy7RRP8qTVZ2bh33mKgDEAhKPmcA4KRT5kqoQ4k2O9HvpB2auGEivjZAuKGd8vb89kBpje-dZHuR8ctgMitsUHgYXxONrTrteNCLT6oob1OfxAVXqvx9mdjM_pz8Yi6jjjN49S-LaaOMHyr0Fe0jQi_-ZF7PowIiRDYOfv8QrlFIACGXgd5VuZc0cB50PD2ldWfYkkzmhWjK17_XrhlyFC7lkLEYAuB0-XdP5HPNmfxkxCoASAai3u0BNNadIwkS-SqvLLTobSUWRWS9K7m9kEQMW6SVi_qMhFhSZZX3gLXUaediAG4MXejfnkIsQy9hN7EpFqrPjbfVwUOtRE85o3hTybvC26iKG9R3hLCBZRlr7UcODiloM9MNDti6VQLC3h3ChWdoHpauqzMU9_QZieH4MSWro0KaPortdvr2z_yoyp0Jdq9FasTjBXXQEMMmtsHyVp572n0SKgUfKQUvTcY5befNfo2-GNNoW4EBZ_Xe4ALYK0CEBT4fGf4VtH4SNlltPr0csDCCocxDuGyCw9O2CsboBNs0Lc0gQXvjtpeur5mjsZDY_4ef0d4wN-HIB003UbEjAWN9IrhvtaPhrc27-HGmMHFFJgcynqBDvn-E1Ug6lxgoVd4d1KkjZ7AxtfRHCna_gLzm7U9GwHG0VI-pvD8LYAhwyxEDxVvi_6Kg8RTtei25Tn9jqYoNIKMAX_oLjFTKJ3YWKuZAElmuksw=w2220-h1508"
        alt="404 NOT FOUND"
      />
      <p className={styles.msg}>
        일치하는 책을 찾지 못했어요!
        <br />
        검색창 옆 직접 추가 버튼을 눌러보세요!
      </p>
    </div>
  );
}

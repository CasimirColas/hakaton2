import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import styles from "../styles/Login.module.css";

const InputStyle = {
  "& label.Mui-focused": {
    color: "#D65A00",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#D65A00",
    },
  },
};

function LoginPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [showPass, setShowPass] = useState<boolean>(false);

  function handleShowPass() {
    setShowPass(!showPass);
  }

  async function handleConnction() {
    //validation here
    const res = await signIn("credentials", {
      email: userEmail,
      password: userPassword,
      redirect: false,
    });
    console.log(res);
    if (res?.status === 200) {
      router.push("/status");
    }
  }

  return (
    <div className={styles.globalContainer}>
      <div className={styles.formBox}>
        <div className={styles.title}>
          <h1>Sign in to Sherlockation</h1>
          <ArrowCircleLeftOutlinedIcon
            className={styles.arrowIcon}
            onClick={() => router.back()}
          />
        </div>
        <div className={styles.inputField}>
          <label>
            Email adress <span className={styles.orange}>*</span>
          </label>
          <TextField
            sx={InputStyle}
            type="email"
            inputProps={{
              sx: { boxSizing: "border-box", padding: "30px 0px" },
            }}
            className={styles.emailField}
            placeholder="youremail@email.com"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.inputField}>
          <label>
            Password <span className={styles.orange}>*</span>
          </label>
          <div className={styles.passwordLine}>
            <TextField
              sx={InputStyle}
              inputProps={{
                sx: {
                  boxSizing: "border-box",
                  padding: "30px 0px",
                },
              }}
              placeholder="*************"
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
              className={styles.passwordField}
              type={showPass ? "text" : "password"}
            />
            <IconButton onClick={handleShowPass} className={styles.eyeIcon}>
              {showPass ? (
                <VisibilityOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </IconButton>
          </div>
        </div>
        <button className={styles.connection} onClick={handleConnction}>
          Next
        </button>
        <p className={styles.noAccount}>
          Don't have an account?&nbsp;
          <Link href="/signup" className={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

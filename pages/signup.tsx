import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import IconButton from "@mui/material/IconButton";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Switch from "@mui/material/Switch";
import styles from "../styles/SignUp.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import putNewUserEmail from "../dynamodb/functionUser/write";

function SignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [isEntreprise, setIsEntreprise] = useState<boolean>(true);
  const [f1, setf1] = useState<string>("");
  const [f2, setf2] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [pass, setpass] = useState<string>("");
  const [passC, setpassC] = useState<string>("");
  function handleHidePass() {
    setShowPassword(!showPassword);
  }

  function handleClickEntreprise() {
    setIsEntreprise(!isEntreprise);
  }
  async function handleCreateAccount() {
    if (pass === passC && pass.length > 1) {
      if (isEntreprise) {
        const req = await putNewUserEmail(email, {
          firstName: f1,
          lastName: f2,
          email: email,
          password: pass,
          role: "user",
        });
        if (req === "User already exists") {
          console.error("User already exists");
        } else {
          router.push("/login");
        }
      } else {
        const req = await putNewUserEmail(email, {
          companyName: f1,
          city: f2,
          email: email,
          password: pass,
          role: "company",
        });
        if (req === "User already exists") {
          console.error("User already exists");
        } else {
          router.push("/login");
        }
      }
    } else {
      console.error("Incorrect password");
    }
  }

  return (
    <div className={styles.globalContainer}>
      <div className={styles.formBox}>
        <div className={styles.title}>
          <h1 className={styles.bienvenue}>
            {isEntreprise
              ? "Create a user account"
              : "Create a company account"}
          </h1>
          <ArrowCircleLeftOutlinedIcon
            className={styles.arrowIcon}
            onClick={() => router.back()}
          />
        </div>

        <div className={styles.formRow}>
          <p className={styles.fieldLabel}>
            {isEntreprise ? "First name" : "Company name"}
            <span className={styles.orange}>*</span>
          </p>
          <input
            value={f1}
            className={styles.inputField}
            type="text"
            onChange={(e) => {
              setf1(e.target.value);
            }}
          />
        </div>
        <div className={styles.formRow}>
          <p className={styles.fieldLabel}>
            {isEntreprise ? "Last name" : "City"}
            <span className={styles.orange}>*</span>
          </p>
          <input
            value={f2}
            className={styles.inputField}
            type="text"
            onChange={(e) => {
              setf2(e.target.value);
            }}
          />
        </div>
        <div className={styles.formRow}>
          <p className={styles.fieldLabel}>
            Email Adress <span className={styles.orange}>*</span>
          </p>
          <input
            value={email}
            className={styles.inputField}
            type="text"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div className={styles.formRow}>
          <p className={styles.fieldLabel}>
            Password <span className={styles.orange}>*</span>
          </p>

          <div className={styles.hideline}>
            <input
              value={pass}
              className={styles.inputField}
              type={showPassword ? "text" : "password"}
              onChange={(e) => {
                setpass(e.target.value);
              }}
            />
            <IconButton onClick={handleHidePass} className={styles.pass}>
              {showPassword ? (
                <VisibilityOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </IconButton>
          </div>
        </div>
        <div className={styles.formRow}>
          <p className={styles.fieldLabel}>
            Confirm password
            <span className={styles.orange}>*</span>
          </p>

          <div className={styles.hideline}>
            <input
              value={passC}
              className={styles.inputField}
              type={showPassword ? "text" : "password"}
              onChange={(e) => {
                setpassC(e.target.value);
              }}
            />
            <IconButton onClick={handleHidePass} className={styles.pass}>
              {showPassword ? (
                <VisibilityOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </IconButton>
          </div>
        </div>
        <div className={styles.switchButton}>
          <p>Are you a company ?</p>
          <Switch color="secondary" onClick={handleClickEntreprise} />
        </div>
        <button className={styles.signInButton} onClick={handleCreateAccount}>
          Create account
        </button>
      </div>
    </div>
  );
}

export default SignInPage;

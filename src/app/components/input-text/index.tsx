import styles from "./inputText.module.css";

interface InputTextProps {
  placeholder: string;
  type?: "text" | "email" | "password" | "number";
  label: string;
}

const InputText = (props: InputTextProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{props.label}</label>
      <input
        type={props.type || "text"}
        placeholder={props.placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default InputText;

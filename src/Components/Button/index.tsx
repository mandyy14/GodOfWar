import "./styles.css";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick}>Login</button>
    </>
  );
};

export default Button;

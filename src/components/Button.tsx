
const Button = (
    props:
    {
      className?: string;
      title: string;
      id: string;
      onClick: () => void;
      isDisabled?: boolean;
    }
) => 
    <button className={props.className || "button"} id={props.id} onClick={props.onClick} disabled={props.isDisabled}>
        {props.title}
    </button>
;

export default Button;


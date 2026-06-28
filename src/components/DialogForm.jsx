import { Dialog } from "./Dialog";

export function DialogForm(props) {
  return (
    <Dialog {...props}>
      <h2>{props.heading}</h2>

      <form method="dialog" onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </Dialog>
  );
}

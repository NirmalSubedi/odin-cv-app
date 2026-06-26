import { Dialog } from "./Dialog";

export function DialogForm(props) {
  return (
    <Dialog {...props}>
      <h2>{props.heading}</h2>

      <form method="dialog">{props.children}</form>
    </Dialog>
  );
}

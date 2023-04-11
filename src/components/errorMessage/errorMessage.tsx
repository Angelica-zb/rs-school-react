interface ErrorMessage {
  message: string;
}

const ErrorMessage = (message: ErrorMessage) => {
  return <div>{message.message}</div>;
};
export default ErrorMessage;

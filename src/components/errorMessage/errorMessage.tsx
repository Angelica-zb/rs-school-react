interface ErrorMes {
  message: string;
}

const ErrorMessage = (message: ErrorMes) => {
  return <div>{message.message}</div>;
};

export default ErrorMessage;

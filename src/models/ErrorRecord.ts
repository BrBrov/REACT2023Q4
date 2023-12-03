import { ValidationError } from 'yup';

class ErrorRecord {
  public status: boolean = false;
  public message: string | null = null;

  constructor(err: ValidationError | null) {
    if (err) {
      this.status = true;
      this.message = err.message;
    }
  }
}

export default ErrorRecord;

export default interface SnackbarState {
  isSnackbarOpen: boolean;
  snackbarSeverity: "success" | "error" | "warning" | "info";
  snackbarMessage: string;
}

// Example interface (expand as needed)
export interface User {
  id: number;
  name: string;
  email: string;

}
export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}
export interface PostModalProps {
  onSubmit: (title: string, content: string) => void;
  onClose: () => void;
}


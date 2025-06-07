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
// interfaces/index.ts
export interface PostProps {
  userId: number;
  title: string;
  content: string; // We'll map API 'body' to 'content' when fetching
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

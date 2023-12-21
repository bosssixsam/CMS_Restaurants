import { cn } from "@/shared";

export interface SearchFilterHeaderProps {
  className?: string;
  toggle: boolean;
  title: string;
  onToggle: () => void;
  onAddNew: () => void;
  onSearch: (e: any) => void;
}

const SearchFilterHeader = ({ className, title }: SearchFilterHeaderProps) => {
  return (
    <div className={cn("[&>div]:py-[20px]", className)}>
      <div className="flex justify-between items-center">
        <h2 className="capitalize font-semibold">{title}</h2>
        <div className="flex space-x-[16px]">{/* <Input */}</div>
      </div>
      <div className={cn()}></div>
    </div>
  );
};

export default SearchFilterHeader;

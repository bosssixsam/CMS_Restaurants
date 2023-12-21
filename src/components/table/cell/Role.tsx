export interface RoleProps {
  className?: string;
  name?: string;
  value: Array<Record<string, string>>;
}

const Role = ({ value, name }: RoleProps) => {
  return (
    <div className="space-y-2">
      {Array.isArray(value) &&
        name &&
        value.map((item, index) => {
          return <span key={index}>{item[name as keyof typeof item] ?? ""}</span>;
        })}
    </div>
  );
};

export default Role;

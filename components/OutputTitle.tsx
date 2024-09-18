interface OutputTitleProps {
  title: string;
}

export default function OutputTitle({ title }: OutputTitleProps) {
  return <h3 className="mb-3 text-2xl font-bold text-green-600">{title} :</h3>;
}

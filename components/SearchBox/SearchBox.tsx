/*interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}*/

type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBox = ({
  value,
  onChange,
}: SearchBoxProps) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="Search notes"
      onChange={(e) =>
        onChange(e.target.value)
      }
    />
  );
};

export default SearchBox;
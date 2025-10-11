import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TableFilterProps {
  searchPlaceholder?: string; 
  searchValue: string;
  onSearchChange: (value: string) => void;

  filterLabel?: string;
  filterOptions?: { label: string; value: string }[];
  selectedFilter?: string;
  onFilterChange?: (value: string) => void;

  onClear?: () => void;
}

const TableFilter: React.FC<TableFilterProps> = ({
  searchPlaceholder = "Search...",
  searchValue,
  onSearchChange,

  filterLabel,
  filterOptions = [],
  selectedFilter,
  onFilterChange,

  onClear,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-muted rounded-xl">
      {/* 🔍 Search Input */}
      <div className="w-full sm:w-auto flex-1">
        <Input
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full sm:w-64"
        />
      </div>

      {/* 🧩 Dropdown Filter */}
      {filterOptions.length > 0 && (
        <div className="flex items-center gap-2">
          {filterLabel && <span className="text-sm font-medium">{filterLabel}</span>}
          <Select
            value={selectedFilter}
            onValueChange={(value) => onFilterChange && onFilterChange(value)}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {filterOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* ❌ Clear Button */}
      {onClear && (
        <Button variant="outline" onClick={onClear} className="text-sm">
          Clear
        </Button>
      )}
    </div>
  );
};

export default TableFilter;

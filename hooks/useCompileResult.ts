import { create } from "zustand";

interface CompileResult {
  stdout: string;
  stderr: string;
  code: number;
  signal: null | string;
  output: string;
}

export interface CompileResultStore {
  result: CompileResult | null;
  is_loading: boolean;
  set_loading: (is_loading: boolean) => void;
  setCompile: (result: CompileResult) => void;
}

export const useCompileResultStore = create<CompileResultStore>((set) => ({
  result: null,
  is_loading: false,
  set_loading: (is_loading) => set({ is_loading }),
  setCompile: (result) => set({ result }),
}));

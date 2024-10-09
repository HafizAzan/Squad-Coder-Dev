"use client";
import React from "react";
import { create } from "zustand";

export const usePagination = create((set, get) => ({
  page: 1,
  size: 10,
  setPage: (newPage) => set({ page: newPage }),
  setSize: (newSize) => set({ size: newSize }),
  getPage: () => get().page,
  getSize: () => get().size,
}));

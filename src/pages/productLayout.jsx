import { Outlet } from "react-router-dom";

export default function ProductsLayout() {
  return (
    <section className="layout">
      <Outlet />
    </section>
  );
}
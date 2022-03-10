import classes from "./AvaliableMaterials.module.css";
import MaterialItem from "./MaterialItem";

const materials = [
  {
    id: "m1",
    name: "Boards",
    href: "/boards",
  },
  { id: "m2", name: "Stones", href: "/stones" },
  { id: "m3", name: "Windows", href: "/windows" },
];

const AvaliableMaterials = () => {
  const listMaterials = materials.map((material) => (
    <MaterialItem id={material.id} name={material.name} href={material.href} />
  ));

  return (
    <section className={classes.materials}>
      <ul>{listMaterials}</ul>
    </section>
  );
};

export default AvaliableMaterials;

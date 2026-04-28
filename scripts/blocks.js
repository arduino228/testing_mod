const reconstructor = extend(AdditiveReconstructor, "additive-reconstructor", {});

reconstructor.plans.add(
  new UnitType.UnitPlan(
    UnitTypes.new_unit_branch_t1,
    600,
    ItemStack.with(Items.silicon, 40, Items.graphite, 40),
    UnitTypes.new_unit_branch_t2
  )
);

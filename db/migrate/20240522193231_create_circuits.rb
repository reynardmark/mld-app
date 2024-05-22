class CreateCircuits < ActiveRecord::Migration[7.1]
  enable_extension("citext")

  def change
    create_table :circuits do |t|
      t.citext(:name, null: false)
      t.string(:substation_name, null: false)
      t.boolean(:is_ilp, null: false)
      t.boolean(:is_droppable, null: false)
      t.integer(:block)

      t.timestamps
    end
  end
end

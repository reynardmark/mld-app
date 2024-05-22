class Circuit < ApplicationRecord
  validates(:name, uniqueness: true, presence: true)
  validates(:substation_name, presence: true)
  validates(:is_ilp, presence: true)
  validates(:is_droppable, presence: true)

  enum(block: {zero: 0, one: 1, two: 2, three: 3, four: 4})
end

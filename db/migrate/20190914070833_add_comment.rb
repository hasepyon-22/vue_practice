class AddComment < ActiveRecord::Migration[5.2]
  def change
    add_column :histories, :comment, :text
  end
end

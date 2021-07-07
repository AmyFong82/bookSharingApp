class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :category
      t.float :rating
      t.integer :user_id

      t.timestamps
    end
  end
end

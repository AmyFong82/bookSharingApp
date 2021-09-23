class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :reading_age
      t.string :cover_image
      t.integer :user_id

      t.timestamps
    end
  end
end

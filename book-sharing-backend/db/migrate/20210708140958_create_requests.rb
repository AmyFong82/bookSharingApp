class CreateRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :requests do |t|
      t.integer :user_id
      t.integer :book_id
      t.string :status, default: "pending"

      t.timestamps
    end
  end
end

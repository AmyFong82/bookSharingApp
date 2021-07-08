class CreateRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :requests do |t|
      t.integer :requester_id
      t.integer :book_id
      t.string :acquire_method
      t.string :address

      t.timestamps
    end
  end
end

class AddQuizIdToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :quiz_id, :integer
    add_index :questions, :quiz_id
  end
end

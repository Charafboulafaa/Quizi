class Quiz < ApplicationRecord
    belongs_to :user
    has_many :questions, dependent: :destroy
    accepts_nested_attributes_for :questions
end

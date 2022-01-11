# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  body        :text             not null
#  rating      :integer          not null
#  user_id     :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_reviews_on_business_id  (business_id)
#  index_reviews_on_user_id      (user_id)
#

class Review < ApplicationRecord
    validates :rating, inclusion: {in: (1..5), message: "Please select a Rating to give"}
    validates :body, presence: {message: "Please put some text for other Yeppers to read!"}

    belongs_to :business,
    foreign_key: :business_id

    belongs_to :author,
    foreign_key: :user_id,
    class_name: :User


end

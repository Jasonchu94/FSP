# == Schema Information
#
# Table name: businesses
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  address      :string           not null
#  state        :string           not null
#  city         :string           not null
#  zipcode      :integer          not null
#  opentime     :integer          not null
#  closetime    :integer          not null
#  phone_number :string           not null
#  website      :string
#  price        :integer          not null
#  latitude     :float            not null
#  longitude    :float            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  categories   :string           is an Array
#
# Indexes
#
#  index_businesses_on_address    (address)
#  index_businesses_on_latitude   (latitude)
#  index_businesses_on_longitude  (longitude)
#  index_businesses_on_name       (name)
#

class Business < ApplicationRecord

    validates :name, :address, :state, :city, :zipcode, 
    :opentime, :closetime, :phone_number,
     :latitude, :longitude, presence: true

    has_many :reviews, 
    foreign_key: :business_id,
    class_name: :Review

    has_many_attached :photos
end

# == Schema Information
#
# Table name: business_pages
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
#  categories   :string           not null
#  latitude     :float            not null
#  longitude    :float            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_business_pages_on_address    (address)
#  index_business_pages_on_latitude   (latitude)
#  index_business_pages_on_longitude  (longitude)
#  index_business_pages_on_name       (name)
#

class BusinessPage < ApplicationRecord

    validates :name, :address, :state, :city, :zipcode, :opentime, :closetime, :phone_number, :latitude, :longitude, presence: true

    #has_many :reviews
end

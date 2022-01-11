json.set! @business.id do
    json.partial! 'business', business: @business

    json.reviews do

        json.array! @business.reviews do |review|
            json.extract! review, :body, :rating, :id, :user_id, :created_at 

            #json.extract! author, :first_name, :last_name, :id
        end
    end
end
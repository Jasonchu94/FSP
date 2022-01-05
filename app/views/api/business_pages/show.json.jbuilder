json.set @business.id do
    json.partial! 'api/business_pages/business' business: @business
end
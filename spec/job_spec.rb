require 'rails_helper'

RSpec.describe 'GET /jobs', type: :request do

  let(:user) { Fabricate(:user) }
  let(:user2) { Fabricate(:user) }
  let(:url) { '/login' }
  let(:params) do
    {
      user: {
        email: user.email,
        password: user.password
      }
    }
  end
  let(:params2) do
    {
      user: {
        email: user2.email,
        password: user2.password
      }
    }
  end

  context 'you must be authorized to make any changes to jobs' do
    it "doesn't allow any unauthorized requests to jobs folder" do
      get '/jobs'
      expect(response.status).to eq 401
      get '/jobs/1'
      expect(response.status).to eq 401
      post '/jobs', params: { job: {company_name: "test company"}}
      expect(response.status).to eq 401
      patch '/jobs/1', params: { job: {company_name: "test company"}}
      expect(response.status).to eq 401
      delete '/jobs/1'
      expect(response.status).to eq 401
    end
  end

  context 'authenticated users can only create/update their own resources' do
    let(:jobsURL) { '/jobs' }
    before do

      post '/login', params: params
      @token = response.headers['Authorization']
      post '/login', params: params2
      @token2 = response.headers['Authorization']
    end

    it 'returns a 404 for unfound jobs' do
      get '/jobs/1000', headers: { Authorization: @token }
      expect(response.status).to eq 404
    end

    it 'allows a user to view only their own jobs' do
      get jobsURL, headers: { Authorization: @token }
      body1 = JSON.parse(response.body)
      # p body1
      # Database was starting at id 7, unknown reason
      expect(body1.length).to eq 2
      expect(body1.first['user_id']).to eq 7
      expect(body1.last['user_id']).to eq 7

      get jobsURL, headers: { Authorization: @token2 }
      body2 = JSON.parse(response.body)
      # p body1
      # Database was starting at id 8, unknown reason
      expect(body2.length).to eq 2
      expect(body2.first['user_id']).to eq 8
      expect(body2.last['user_id']).to eq 8
    end

    it 'prevents a user from updating a job that is not theirs' do
      patch '/jobs/3', params: {job: {company_name: "Umbrella"}}, headers: {Authorization: @token}
      expect(response.status).to eq 401
    end

    it 'allows a user to update their own job' do
      patch '/jobs/1', params: {job: {company_name: "Portal"}}, headers: {Authorization: @token}
      expect(response.status).to eq 200
      body = JSON.parse(response.body)
      expect(body["company_name"]).to eq("Portal")
    end

    it 'prevents unauthorized user from deleting a job' do
      delete '/jobs/3', headers: {Authorization: @token}
      expect(response.status).to eq 401
    end

    it 'prevents unauthorized user from viewing a job' do
      get '/jobs/1', headers: {Authorization: @token2}
      expect(response.status).to eq 401
    end
  end
end
